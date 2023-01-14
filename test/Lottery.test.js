const Lottery = artifacts.require("Lottery");

contract("Lottery", (accounts) => {
    before(async () =>{
        instance = await Lottery.deployed()
    })

    it('see the initial balance of the lottery', async() =>{
        let balance = await instance.getBalance()
        assert.equal(balance, 0, 'the initial balance should be 0 ether.')
    })
})

