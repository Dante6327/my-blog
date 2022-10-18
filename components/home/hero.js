import React from "react";
import { AnimationMain } from "./animation";

function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to JP's Blog
          <br className="hidden lg:inline-block" />
          goooood
        </h1>
        <p className="mb-8 leading-relaxed">
          사람은 더운지라 구하지 뜨고, 노년에게서 그것은 투명하되 바로 청춘
          약동하다. 가지에 타오르고 수 곧 살 할지라도 청춘의 뭇 있으랴?
          소담스러운 오아이스도 대고, 때에, 꾸며 풀이 맺어, 듣는다. 충분히 트고,
          노래하며 것은 살 꾸며 있으랴? 되려니와, 자신과 따뜻한 약동하다. 자신과
          모래뿐일 커다란 별과 끓는다. 인간의 이는 두기 있는 사람은 영락과
          위하여서. 구하지 있는 것은 방지하는 길을 아름다우냐? 가는 인간의 가장
          심장은 부패뿐이다. 희망의 굳세게 우리의 이것이다. 우리의 이것을
          있음으로써 눈이 원질이 그리하였는가?. -출처 : 한글입숨
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <AnimationMain />
      </div>
    </>
  );
}

export default Hero;
