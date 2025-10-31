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
	const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const loadOptions = useCallback(
		(inputValue: string) =>
			new Promise<AsyncSelectOption<T>[]>((resolve) => {
				const query = inputValue.trim();

				if (debounceRef.current) {
					clearTimeout(debounceRef.current);
					debounceRef.current = null;
				}

				if (!query) {
					resolve([]);
					return;
				}

				debounceRef.current = setTimeout(async () => {
					try {
						const items = await fetchItems(query);

						if (!Array.isArray(items)) {
							resolve([]);
							return;
						}

						resolve(
							items.map((item) => ({
								value: String(getOptionValue(item)),
								label: getOptionLabel(item),
								raw: item,
							})),
						);
					} catch (error) {
						console.error('Erro ao carregar opções do AsyncSelect', error);
						resolve([]);
					} finally {
						debounceRef.current = null;
					}
				}, debounceMs);
			}),
		[debounceMs, fetchItems, getOptionLabel, getOptionValue],
	);

	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	return { loadOptions, selectedOption, setSelectedOption };
}
