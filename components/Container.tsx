const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div
      css={{
        margin: "0 auto",
        [mq[0]]: {
          width: breakpoints[0],
        },
        [mq[1]]: {
          width: breakpoints[1],
        },
        [mq[2]]: {
          width: breakpoints[2],
        },
        [mq[3]]: {
          width: breakpoints[3],
        },
      }}
    >
      {children}
    </div>
  );
}
