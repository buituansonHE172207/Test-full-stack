const META = {
  BASE_URL:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__BASE_URL) ||
    process.env.PUBLIC_ENV__META__BASE_URL ||
    'http://localhost:3000',

  DEFAULT_AUTHOR:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__DEFAULT_AUTHOR) ||
    process.env.PUBLIC_ENV__META__DEFAULT_AUTHOR ||
    'IT Team 4 Change',

  DEFAULT_DESCRIPTION:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__DEFAULT_DESCRIPTION) ||
    process.env.PUBLIC_ENV__META__DEFAULT_DESCRIPTION ||
    'IT4C Frontend Boilerplate',

  DEFAULT_TITLE:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__DEFAULT_TITLE) ||
    process.env.PUBLIC_ENV__META__DEFAULT_TITLE ||
    'IT4C',

  BACKEND:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__BACKEND) ||
    process.env.PUBLIC_ENV__META__BACKEND ||
    'http://localhost:8080',

  CHECKSUM_KEY:
    (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_ENV__META__CHECKSUM_KEY) ||
    process.env.PUBLIC_ENV__META__CHECKSUM_KEY ||
    '40612359b37772321b7',
}

export { META }
