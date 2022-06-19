import * as path from 'path';//vem daqui yarn add -D @types/node
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');//__dirname utilizano ele para pegar o diretorio onde estamos. Esse __dirname vem do @types/node/global.d.ts

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),//@src vai apontar para
  '@test': path.join(files, 'test'),
})