import { useMemo } from "react";

const Component = ({
  maskGroup,
  ivanaTinkle,
  chefManager,
  propFlex,
  propBorderRadius,
}) => {
  const divStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const maskGroupIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className="flex-[0.6763] box-border flex flex-col items-center justify-start pt-10 pb-8 pr-[77px] pl-[79px] gap-[32px] min-w-[281px] max-w-full text-center text-7xl-9 text-black font-cinzel-decorative border-[0.9px] border-solid border-gainsboro-200 mq450:gap-[32px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
      style={divStyle}
    >
      <div className="w-[350px] h-[350px] relative box-border hidden max-w-full border-[0.9px] border-solid border-gainsboro-200" />
      <img
        className="w-[170.5px] h-[170.5px] relative rounded-[179.48px] object-cover z-[1]"
        loading="eager"
        alt=""
        src={maskGroup}
        style={maskGroupIconStyle}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
        <div className="relative leading-[35.9px] capitalize z-[1] mq450:text-3xl mq450:leading-[29px]">
          {ivanaTinkle}
        </div>
        <div className="relative text-mid-9 leading-[30.51px] font-jost text-darkslategray-200 z-[1]">
          {chefManager}
        </div>
      </div>
    </div>
  );
};

export default Component;
