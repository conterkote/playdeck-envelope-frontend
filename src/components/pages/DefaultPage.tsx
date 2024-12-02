import {ControlButtonsSection, CountdownEnvelopeProgress, Envelope, PageHeader} from "../widget";

function DefaultPage() {
  return (
    <div className={"h-full flex flex-col"}>
      <PageHeader/>
      <CountdownEnvelopeProgress className={"px-8"}/>
      <Envelope className={"flex grow justify-center items-center"}/>
      <ControlButtonsSection className={"mb-[24px]"}/>
    </div>
  );
}

export default DefaultPage;