const hashSafeDisplay = (hash) => {
  if (!hash) {
    console.log("Make sure your wallet is connected! -- no account connected");
    return;
  }
  return (
    hash.substring(0, 5) +
    "..." +
    hash.substring(hash.length - 4, hash.length)
  );
};

export default hashSafeDisplay;