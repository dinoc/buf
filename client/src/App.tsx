import { PartialMessage } from '@bufbuild/protobuf'
import { client } from './client'
import { CurrentUser } from './generated/main_pb'
import { ConnectError } from '@connectrpc/connect'

export function App() {
  const getCurrentUser = () => {
    const abort = new AbortController()
    //abort.abort();
    client
      .getCurrentUser({}, { signal: abort.signal })
      .then((value: CurrentUser) =>
        console.log('getCurrentUser success', value)
      )
      .catch(e => {
        // ConnectError.from returns a ConnectError as is, and converts any other error to a ConnectError
        const err: ConnectError = ConnectError.from(e)
        console.log('getCurrentUser error', err)
      })
  }
  const upsertUser = () => {
    const req: PartialMessage<CurrentUser> = {
      id: '2',
      firstName: 'Will',
      lastName: 'Jaynes',
      roles: [],
    }
    const abort = new AbortController()
    //abort.abort();
    client
      .upsertUser(req, { signal: abort.signal })
      .then((value: CurrentUser) => console.log('upsertUser success', value))
      .catch(e => {
        // ConnectError.from returns a ConnectError as is, and converts any other error to a ConnectError
        const err: ConnectError = ConnectError.from(e)
        console.log('upsertUser error', err)
      })
  }
  return (
    <div>
      <button onClick={getCurrentUser}>getCurrentUser</button>
      <button onClick={upsertUser}>upsertUser</button>
    </div>
  )
}
