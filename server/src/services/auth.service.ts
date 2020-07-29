import { Request } from 'express'
import { getConnection } from 'typeorm'
import User from '../database/entity/user'

class Service {
  /**
   * Check SSO is Activated.
   * 
   * @param {Request} req
   */
  public ssoAccessData (req: Request): any {
    if (req.sso) {
      // verify sso {domain} is "destinyth", {name} as employeeCode
      const { user }: any = req.sso
      if (user.domain.toLowerCase() === 'destinyth' && !isNaN(user.name)) {
        return {
          employeeCode: parseInt(user.name),
          employeeName: user.adUser.name[0],
          nickName    : user.displayName.split('-')[0].trim(),
          accountName : user.adUser.userPrincipalName[0],
          email       : user.adUser.proxyAddresses[0].split(':')[1],
          jobTitle    : user.adUser.title[0],
          department  : user.adUser.department[0],
          company     : user.adUser.company[0],
          officeName  : user.adUser.physicalDeliveryOfficeName[0]
        }
      } else {
        return false
      }
    } else {
      return false
    }
  }

  /**
   * Update user data into system db.
   * 
   * @param {Request} req
   * @param {User} user
   */
  public async ssoAssignData (req: Request, user: User): Promise<any> {
    const data: any = ('employeeCode' in req) ? req : this.ssoAccessData(req)
    let store: any = {}

    if (!data) return Promise.resolve(void 0)

    if (!user.employeeName) {
      store.employeeName = data.employeeName
    }

    if (!user.username) {
      store.username = data.nickName.toLowerCase()
    }

    if (Object.keys(store).length) {
      // Update entity.
      await getConnection()
        .createQueryBuilder()
        .update(User)
        .set(store)
        .where('id = :value', { value: user.id })
        .execute()
      
      return Promise.resolve(true)
    }
  }
}

export default new Service()