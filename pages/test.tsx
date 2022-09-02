function Test() {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
      }}
    >
      This has a hotpink background.
    </div>
  );
}

export default Test;
