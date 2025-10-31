import { useCallback, useEffect, useRef, useState } from 'react';

export interface AsyncSelectOption<T> {
	value: string;
	label: string;
	raw: T;
}

interface UseAsyncSelectParams<T> {
	fetchItems: (input: string) => Promise<T[]>;
	getOptionLabel: (item: T) => string;
	getOptionValue: (item: T) => string | number;
	debounceMs?: number;
}

export default function useAsyncSelect<T>({
	fetchItems,
	getOptionLabel,
	getOptionValue,
	debounceMs = 500,
}: UseAsyncSelectParams<T>) {
	const [selectedOption, setSelectedOption] = useState<AsyncSelectOption<T> | null>(null);
	const [defaultOptions, setDefaultOptions] = useState<AsyncSelectOption<T>[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const loadOptions = useCallback(
		(inputValue: string) =>
			new Promise<AsyncSelectOption<T>[]>((resolve) => {
				const query = (inputValue ?? '').trim();

				if (debounceRef.current) {
					clearTimeout(debounceRef.current);
					debounceRef.current = null;
				}

				debounceRef.current = setTimeout(async () => {
					try {
						setIsLoading(true);
						const items = await fetchItems(query);

						if (!Array.isArray(items)) {
							if (!query) {
								setDefaultOptions([]);
							}
							resolve([]);
							return;
						}

						const mappedItems = items.map((item) => ({
							value: String(getOptionValue(item)),
							label: getOptionLabel(item),
							raw: item,
						}));

						if (!query) {
							setDefaultOptions(mappedItems);
						}

						resolve(mappedItems);
					} catch (error) {
						console.error('Erro ao carregar opcoes do AsyncSelect', error);
						if (!query) {
							setDefaultOptions([]);
						}
						resolve([]);
					} finally {
						debounceRef.current = null;
						setIsLoading(false);
					}
				}, debounceMs);
			}),
		[debounceMs, fetchItems, getOptionLabel, getOptionValue],
	);

	const triggerDefaultLoad = useCallback(() => loadOptions(''), [loadOptions]);

	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	return { loadOptions, selectedOption, setSelectedOption, defaultOptions, triggerDefaultLoad, isLoading };
}
