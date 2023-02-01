//! A set of constant values used in substrate runtime.

/// Money matters.
pub mod currency {
	use node_primitives::Balance;

	pub const MILLICENTS: Balance = 1_000_000_000_000_000;
	pub const CENTS: Balance = 1_000 * MILLICENTS; // assume this is worth about a cent.
	pub const DOLLARS: Balance = 100 * CENTS;

	pub const MICROCENTS: Balance = MILLICENTS / 1_0;

	pub const GASFEE:Balance = MICROCENTS/1_000_00;

	pub const fn deposit(items: u32, bytes: u32) -> Balance {
		items as Balance * 15 * CENTS + (bytes as Balance) * 6 * CENTS
	}

	pub const fn itemdeposit(items: u32, bytes: u32) -> Balance {
		(items as Balance * 10 * CENTS/10 + (bytes as Balance) * (15 * MICROCENTS)) / 5
	}
}
