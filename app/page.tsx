import Header, { HeaderLeft, HeaderSubtitle, HeaderTitle } from "./_components/header";

export default function Home() {
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
    </div>
  );
}
