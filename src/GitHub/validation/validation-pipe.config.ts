import type { ValidationPipeOptions } from '@nestjs/common';

export const defaultValidationPipeConfig: ValidationPipeOptions = {
  transform: true,
  whitelist: true,
  validationError: { target: false },
};
