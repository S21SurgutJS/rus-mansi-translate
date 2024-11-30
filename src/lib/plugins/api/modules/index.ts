import { browser } from '$app/environment';
import { ApiError } from '..';

type languageType = 'rus_Cyrl' | 'mancy_Cyrl';

export type ProxyData = {
	text: string;
	sourceLanguage: languageType;
	targetLanguage: languageType;
};

export interface Fetch {
	(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
}
export class BaseApi {
	protected readonly customFetch: Fetch;

	constructor(fetchFunc: Fetch) {
		if (!fetchFunc && !browser) {
			throw new Error('You can`t use node fetch on server');
		}

		if (fetchFunc === fetch && !browser) {
			throw new Error('Fetch is not svelte fetch');
		}

		if (fetchFunc) {
			this.customFetch = fetchFunc;
		} else {
			this.customFetch = fetch;
		}
	}

	async proxyFetch(payload: ProxyData) {
		const res = await this.customFetch(`http://91.198.71.199:7012/translator`, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			throw new ApiError(res.status, await res.json());
		}
		return await res.json();
	}
}
