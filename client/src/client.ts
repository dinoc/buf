import { createConnectTransport } from '@connectrpc/connect-web'
import { createPromiseClient } from '@connectrpc/connect'
import { AppService } from './generated/main_connect'

export const client = createPromiseClient(
  AppService,
  createConnectTransport({
    baseUrl: 'http://localhost:3000',
    //useBinaryFormat: true,
  })
)
