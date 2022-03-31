export type EconOptions = {
	/**
	 * Uses defined from wiki link econ item has.
	 * 
	 * Defaults to false.
	 */
	useTrueDefindex?: boolean;
	/**
	 * Retrieves item number from fraudwarning if item has been renamed.
	 * 
	 * Defaults to false.
	 */
	itemNumberFromFraudWarning?: boolean;
	/**
	 * Retrieves crate number for crates.
	 * 
	 * Defaults to false.
	 */
	retrieveCrateNumber?: boolean;
};
