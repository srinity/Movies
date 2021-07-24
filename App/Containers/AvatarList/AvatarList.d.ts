import { FC } from 'react'
import { FlatListProps } from 'react-native'

// eslint-disable-next-line import/named
import { AvatarData } from '../../Components/Avatar/Avatar'

declare const AvatarList: FC<AvatarListProps>
export default AvatarList

export interface AvatarListProps
  extends Omit<FlatListProps<AvatarData>, 'data'> {
  /**
   * The list of avatars/actors/actresses.
   *
   */
  data: AvatarData[]
}
