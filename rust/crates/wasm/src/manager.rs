pub(crate) struct LamportManager(usize);

impl LamportManager {
    pub(crate) fn new() -> Self {
        LamportManager(0)
    }

    pub(crate) fn next(&mut self) -> usize {
        self.0 += 1;
        self.0
    }

    pub(crate) fn update(&mut self, timestamp: usize) {
        if timestamp > self.0 {
            self.0 = timestamp;
        }
    }
}