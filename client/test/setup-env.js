import '@testing-library/jest-dom/extend-expect';
import { server } from './server';

beforeAll(() => server.start());
afterEach(() => server.resetHandlers());
afterAll(() => server.stop());
