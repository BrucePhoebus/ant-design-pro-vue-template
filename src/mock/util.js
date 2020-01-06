const responseBody = {
  message: '',
  timestamp: 0,
  result: null,
  code: 0
}

export const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data
  if (message !== undefined && message !== null) {
    responseBody.message = message
  }
  if (code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }
  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers
  }
  responseBody.timestamp = new Date().getTime()
  return responseBody
}

export const getQueryParameters = (options) => {
  const url = options.url
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}')
}

export const getBody = (options) => {
  return options.body && JSON.parse(options.body)
}

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
export const listToTree = (list, tree, parentId) => {
	list.forEach(item => {
		// 判断是否为父级菜单
		if (item.parentId === parentId) {
			const child = {
				...item,
				key: item.key || item.name,
				children: []
			}
			// 迭代 list， 找到当前菜单相符合的所有子菜单
			listToTree(list, child.children, item.id)
			// 删掉不存在 children 值的属性
			if (child.children.length <= 0) {
				delete child.children
			}
			// 加入到树中
			tree.push(child)
		}
	})
}
