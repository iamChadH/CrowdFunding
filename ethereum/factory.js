import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const address = "0xf40b20c1D220bC351251d65CdC0C3e2e7d80c67F";

const instance = new web3.eth.Contract(CampaignFactory.abi, address);

export default instance;
