import { ICommand } from '@constants/command.constant'
import { getBuffer } from '@utils/helper.utils'
import { lolhuman, footer } from 'config.json'

export default {
    description: 'Random estetic picture',
    category: 'image',
    consume: 4,
    callback: async ({ client, msg, prefix }) => {
        const { from, sender } = msg
        let __buff = await getBuffer(`https://api.lolhuman.xyz/api/random/estetic?apikey=${lolhuman}`)
        return client.sendMessage(from, { image: __buff, jpegThumbnail: __buff })
    },
} as ICommand