import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { RequestParamDto } from '../dtos/request.param.dto';

dotenv.config();

@Injectable()
export class RepositoryRequestService {
  async get(params: RequestParamDto): Promise<AxiosResponse> {
    return await axios.get(
      'https://raw.githubusercontent.com/EvanLi/Github-Ranking/master/Data/github-ranking-2019-02-22.csv',
    );
  }
}
