function Test() {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        paddingTop: "100px",
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
