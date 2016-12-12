let fs = require('fs')

/**
 * 返回的目标数组
 * @type {Array}
 */
let files = []

module.exports = function find(path, name, file) {
  /**
   * 忽略的文件夹
   * node_modules
   * .git
   */
  if(['.git','.idea','dist','test'].indexOf(file)=='-1'){
    /**
     * 找到目标文件
     */
    if (fs.statSync(path).isFile()&&file==name) {
      return files.push(path)
    }
    /**
     * 是文件夹的话递归查找
     */
    fs.statSync(path).isDirectory()&&
    fs.readdirSync(path).forEach((file) => {
      find(path + '/' + file, name, file)
    })
    return files
  }
}