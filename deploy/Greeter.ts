import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deployer, tokenOwner } = await getNamedAccounts()
  const { deploy } = deployments

  await deploy('Greeter', {
    from: deployer,
    args: ['Hello, World!'],
    log: true,
  });

}
export default func

func.tags = ['Greeter']
