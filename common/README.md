# Zod inference and validation package
A collections of zod schemas for validating input data in js/ts applications
it contains the validations for following schemas:

1.`signupSchema` 
2.`signinSchema` 
3.`createBlogSchema` 
4.`updateBlogSchema` 

This package is created by using the zod infer in typerscript, which allows us to valid with same varaibles/constants in frontend and backend.

# Installation

```bash
npm install @sudheer0071/validations
```

# Usage

### By using `signupInput` in frontend and `singupSchema` in backend
```ts
import { signupSchema, signupInput } from '@sudheer0071/validations';

const data: signupInput = {
  email: 'example@example.com',
  password: 'password',
  name: 'John Doe'
};

const result = signupSchema.parse(data);
```

### By using `signinInput` in frontend and `singinSchema` in backend
```ts
import { signupSchema, signupInput } from '@sudheer0071/validations';

const data: signupInput = {
  email: 'example@example.com',
  password: 'password',
  name: 'John Doe'
};

const result = signupSchema.parse(data);
```

### By using `createblogInput` in frontend and `createBlogSchema` in backend
```ts
import { signupSchema, signupInput } from '@sudheer0071/validations';

const data: signupInput = {
  email: 'example@example.com',
  password: 'password',
  name: 'John Doe'
};

const result = signupSchema.parse(data);
```

### By using `updateblogInput` in frontend and `updateBlogSchema` in backend
```ts
import { signupSchema, signupInput } from '@sudheer0071/validations';

const data: signupInput = {
  email: 'example@example.com',
  password: 'password',
  name: 'John Doe'
};

const result = signupSchema.parse(data);
```
# License
This package is licensed under the MIT License. See the `LICENSE` file for details.

## My github
 [![](https://skillicons.dev/icons?i=github)](https://github.com/sudheer0071)