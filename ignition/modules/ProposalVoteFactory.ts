import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteFactoryModule = buildModule("ProposalVoteFactoryModule", (c) => {
  const proposalVoteFactory = c.contract("ProposalVote");

  return { proposalVoteFactory };
});

export default ProposalVoteFactoryModule;


// ProposalVoteFactoryModule#ProposalVote - 0x45Ec2abaC2D0c75237AcB1356c11195c5740eb3c

// - https://sepolia.basescan.org/address/0x9801124b9f54b0c4eD47368f437f574abc3ae992#code
