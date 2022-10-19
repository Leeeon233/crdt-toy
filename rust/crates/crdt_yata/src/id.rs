pub type ClientID = u64;
#[derive(Debug, Copy, Clone, PartialOrd, Ord, PartialEq, Eq, Hash)]
pub struct ID {
    /// Unique identifier of a client, which inserted corresponding item.
    pub client: ClientID,

    /// Monotonically incrementing sequence number, which informs about order of inserted item
    /// operation in a scope of a given `client`. This value doesn't have to increase by 1, but
    /// instead is increased by number of countable elements which make a content of an inserted
    /// block.
    pub clock: u32,
}