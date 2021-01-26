import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const mswServer = setupServer(...handlers);
const server = {
  start: () => {
    mswServer.listen({
      onUnhandledRequest(req) {
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        );
      },
    });
  },
  stop: mswServer.close,
  resetHandlers: mswServer.resetHandlers,
  use: mswServer.use,
};

export { server, rest };

