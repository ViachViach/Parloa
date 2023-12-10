import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { RequestParamDto } from '../dtos/request.param.dto';
import { sprintf } from 'sprintf-js';

dotenv.config();

@Injectable()
export class RepositoryRequestService {
  async get(params: RequestParamDto): Promise<AxiosResponse> {
    return await axios.get(
      sprintf(
        '%s/EvanLi/Github-Ranking/master/Data/github-ranking-%s.csv',
        process.env.GITHUB_API_URL,
        params.date,
      ),
    );
  }
}
