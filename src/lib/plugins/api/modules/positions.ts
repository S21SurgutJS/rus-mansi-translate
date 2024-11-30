import type {
	CreatePositionDto,
	DeletePositionDto,
	PositionDto,
	UpdatePositionDto
} from '@ddsgt_mono/lib';
import { BaseApi, type Fetch } from '.';

export class PositionsApi extends BaseApi {
	constructor(svelteFetch: Fetch) {
		super(svelteFetch);
	}

	public async getPositions(searchQuery: string): Promise<PositionDto[]> {
		return await this.proxyFetch({
			url: `/positions/getAll`,
			body: { searchQuery }
		});
	}

	public async createPosition(dto: Partial<CreatePositionDto>) {
		return await this.proxyFetch({
			body: dto,
			url: `/positions/create`
		});
	}

	public async updatePosition(dto: UpdatePositionDto) {
		return await this.proxyFetch({
			body: dto,
			url: `/positions/update`
		});
	}

	public async deletePosition(dto: DeletePositionDto) {
		return await this.proxyFetch({
			body: dto,
			url: `/positions/delete`
		});
	}
}
