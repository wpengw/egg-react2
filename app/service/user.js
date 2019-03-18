'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('users', { uid });
    // 假定这里还有一些复杂的计算，然后返回需要的信息。
    // const picture = await this.getPicture(uid);

    return user
  }

  async getPicture(uid) {
    return 'https://img-blog.csdn.net/20180718215056611?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0NDQ2NjYz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70';
    // const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
    // return result.data;
  }
}

module.exports = UserService;