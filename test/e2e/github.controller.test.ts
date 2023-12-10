import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('GitHub (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ GET', async function () {
    const res = await request(app.getHttpServer())
      .get('/v1/github')
      .send({
        data: '2020-04-01',
        limit: 10,
      })
      .then((res) => res);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(10);
  });
});
