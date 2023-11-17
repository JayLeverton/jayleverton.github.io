import React from "react";
import { GithubSVG } from "./GithubSVG";
import { PopoutSVG } from "./PopoutSVG";

const ProjectTemplate = () => {
  return (
    // bg-[#0d1424]

    <div className="flex flex-col gap-10 shadow-[0px_0px_5px_5px_rgba(0,0,0,0.2)] rounded-2xl ">
      {/*  */}
      {/* Project image container */}
      <div>
        <img src="" alt="" />
      </div>

      {/* Project description container */}
      <div className="flex flex-col gap-5">
        <span>
          <h4 className="inline text-xl font-semibold">Project Name</h4>
          <h4 className="inline text-lg text-slate-300"> &#40;Date&#41;</h4>
        </span>

        {/* Summary text */}
        <p className="text-slate-300 px-2">
          Project summary that includes the site's purpose and key features.
        </p>
        <div className="flex justify-center align-middle gap-3">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 73 73"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>frameworks-and-libraries/react</title>
              <desc>Created with Sketch.</desc> <defs> </defs>
              <g
                id="frameworks-and-libraries/react"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="container"
                  transform="translate(2.000000, 2.000000)"
                  fill="#1c1c1c"
                  fillRule="nonzero"
                  stroke="#0C6D87"
                  strokeWidth="2"
                >
                  <rect
                    id="mask"
                    x="-1"
                    y="-1"
                    width="71"
                    height="71"
                    rx="14"
                  ></rect>
                </g>
                <g
                  id="React-icon"
                  transform="translate(12.000000, 15.000000)"
                  fill="#61DAFB"
                  fillRule="nonzero"
                >
                  <path
                    d="M48.9302846,21.7611789 C48.9302846,18.5243902 44.8768293,15.4569106 38.6621951,13.5546748 C40.0963415,7.22052846 39.4589431,2.18109756 36.6504065,0.567682927 C36.0030488,0.189227642 35.2461382,0.00995934959 34.4195122,0.00995934959 L34.4195122,2.23089431 C34.8776423,2.23089431 35.2461382,2.32052846 35.554878,2.4898374 C36.9093496,3.26666667 37.4969512,6.2245935 37.0388211,10.029065 C36.9292683,10.9652439 36.75,11.9512195 36.5308943,12.9571138 C34.5788618,12.479065 32.447561,12.1105691 30.2067073,11.8715447 C28.8621951,10.029065 27.4678862,8.35589431 26.0636179,6.89186992 C29.3103659,3.87418699 32.3579268,2.22093496 34.4294715,2.22093496 L34.4294715,0 C34.4294715,0 34.4294715,0 34.4294715,0 C31.6906504,0 28.1052846,1.95203252 24.4800813,5.33821138 C20.854878,1.97195122 17.2695122,0.0398373984 14.5306911,0.0398373984 L14.5306911,2.26077236 C16.5922764,2.26077236 19.6497967,3.90406504 22.8965447,6.90182927 C21.5022358,8.36585366 20.1079268,10.029065 18.7833333,11.8715447 C16.5325203,12.1105691 14.4012195,12.479065 12.449187,12.9670732 C12.220122,11.9711382 12.050813,11.0050813 11.9313008,10.0788618 C11.4632114,6.27439024 12.0408537,3.31646341 13.3853659,2.5296748 C13.6841463,2.3504065 14.072561,2.27073171 14.5306911,2.27073171 L14.5306911,0.049796748 C14.5306911,0.049796748 14.5306911,0.049796748 14.5306911,0.049796748 C13.6941057,0.049796748 12.9371951,0.229065041 12.279878,0.607520325 C9.48130081,2.22093496 8.85386179,7.2504065 10.2979675,13.5646341 C4.10325203,15.4768293 0.0697154472,18.5343496 0.0697154472,21.7611789 C0.0697154472,24.9979675 4.12317073,28.0654472 10.3378049,29.9676829 C8.90365854,36.3018293 9.54105691,41.3412602 12.3495935,42.9546748 C12.9969512,43.3331301 13.7538618,43.5123984 14.5904472,43.5123984 C17.3292683,43.5123984 20.9146341,41.5603659 24.5398374,38.174187 C28.1650407,41.5404472 31.7504065,43.472561 34.4892276,43.472561 C35.325813,43.472561 36.0827236,43.2932927 36.7400407,42.9148374 C39.5386179,41.3014228 40.1660569,36.2719512 38.7219512,29.9577236 C44.896748,28.0554878 48.9302846,24.9880081 48.9302846,21.7611789 Z M35.9632114,15.1182927 C35.5947154,16.4030488 35.1365854,17.7276423 34.6186992,19.0522358 C34.2103659,18.2554878 33.7821138,17.4587398 33.3140244,16.6619919 C32.8558943,15.8652439 32.3678862,15.0884146 31.879878,14.3315041 C33.2941057,14.5406504 34.6585366,14.7995935 35.9632114,15.1182927 Z M31.4018293,25.725 C30.625,27.0695122 29.828252,28.3443089 29.001626,29.5294715 C27.5176829,29.6589431 26.0138211,29.7286585 24.5,29.7286585 C22.9961382,29.7286585 21.4922764,29.6589431 20.0182927,29.5394309 C19.1916667,28.3542683 18.3849593,27.0894309 17.6081301,25.754878 C16.8512195,24.4502033 16.1640244,23.1256098 15.5365854,21.7910569 C16.154065,20.4565041 16.8512195,19.1219512 17.5981707,17.8172764 C18.375,16.4727642 19.171748,15.1979675 19.998374,14.0128049 C21.4823171,13.8833333 22.9861789,13.8136179 24.5,13.8136179 C26.0038618,13.8136179 27.5077236,13.8833333 28.9817073,14.0028455 C29.8083333,15.1880081 30.6150407,16.4528455 31.3918699,17.7873984 C32.1487805,19.0920732 32.8359756,20.4166667 33.4634146,21.7512195 C32.8359756,23.0857724 32.1487805,24.4203252 31.4018293,25.725 Z M34.6186992,24.4302846 C35.1565041,25.7648374 35.6146341,27.0993902 35.9930894,28.3941057 C34.6884146,28.7128049 33.3140244,28.9817073 31.8898374,29.1908537 C32.3778455,28.4239837 32.8658537,27.6371951 33.3239837,26.8304878 C33.7821138,26.0337398 34.2103659,25.2270325 34.6186992,24.4302846 Z M24.5199187,35.0569106 C23.5936992,34.100813 22.6674797,33.0351626 21.7512195,31.8699187 C22.647561,31.9097561 23.5638211,31.9396341 24.4900407,31.9396341 C25.4262195,31.9396341 26.352439,31.9197154 27.2587398,31.8699187 C26.3623984,33.0351626 25.4361789,34.100813 24.5199187,35.0569106 Z M17.1101626,29.1908537 C15.695935,28.9817073 14.3315041,28.7227642 13.0268293,28.404065 C13.3953252,27.1193089 13.8534553,25.7947154 14.3713415,24.470122 C14.7796748,25.2668699 15.2079268,26.0636179 15.6760163,26.8603659 C16.1441057,27.6571138 16.6221545,28.4339431 17.1101626,29.1908537 Z M24.470122,8.46544715 C25.3963415,9.42154472 26.322561,10.4871951 27.2388211,11.652439 C26.3424797,11.6126016 25.4262195,11.5827236 24.5,11.5827236 C23.5638211,11.5827236 22.6376016,11.6026423 21.7313008,11.652439 C22.6276423,10.4871951 23.5538618,9.42154472 24.470122,8.46544715 Z M17.1002033,14.3315041 C16.6121951,15.098374 16.124187,15.8851626 15.6660569,16.6918699 C15.2079268,17.4886179 14.7796748,18.2853659 14.3713415,19.0821138 C13.8335366,17.747561 13.3754065,16.4130081 12.9969512,15.1182927 C14.301626,14.8095528 15.6760163,14.5406504 17.1002033,14.3315041 Z M8.08699187,26.8006098 C4.56138211,25.296748 2.28069106,23.3247967 2.28069106,21.7611789 C2.28069106,20.197561 4.56138211,18.2156504 8.08699187,16.721748 C8.94349593,16.353252 9.8796748,16.0245935 10.8457317,15.7158537 C11.4134146,17.6678862 12.1603659,19.6995935 13.0865854,21.7810976 C12.1703252,23.8526423 11.4333333,25.8743902 10.8756098,27.8164634 C9.88963415,27.5077236 8.95345528,27.1691057 8.08699187,26.8006098 Z M13.445122,41.0325203 C12.0906504,40.2556911 11.5030488,37.2977642 11.9611789,33.4932927 C12.0707317,32.5571138 12.25,31.5711382 12.4691057,30.5652439 C14.4211382,31.0432927 16.552439,31.4117886 18.7932927,31.650813 C20.1378049,33.4932927 21.5321138,35.1664634 22.9363821,36.6304878 C19.6896341,39.6481707 16.6420732,41.3014228 14.5705285,41.3014228 C14.1223577,41.2914634 13.7439024,41.2018293 13.445122,41.0325203 Z M37.0686992,33.4434959 C37.5367886,37.2479675 36.9591463,40.2058943 35.6146341,40.9926829 C35.3158537,41.1719512 34.927439,41.251626 34.4693089,41.251626 C32.4077236,41.251626 29.3502033,39.6083333 26.1034553,36.6105691 C27.4977642,35.1465447 28.8920732,33.4833333 30.2166667,31.6408537 C32.4674797,31.4018293 34.5987805,31.0333333 36.550813,30.5453252 C36.779878,31.5512195 36.9591463,32.5172764 37.0686992,33.4434959 Z M40.9030488,26.8006098 C40.0465447,27.1691057 39.1103659,27.4977642 38.1443089,27.8065041 C37.576626,25.8544715 36.8296748,23.8227642 35.9034553,21.7412602 C36.8197154,19.6697154 37.5567073,17.6479675 38.1144309,15.7058943 C39.1004065,16.0146341 40.0365854,16.353252 40.9130081,16.721748 C44.4386179,18.2256098 46.7193089,20.197561 46.7193089,21.7611789 C46.7093496,23.3247967 44.4286585,25.3067073 40.9030488,26.8006098 Z"
                    id="Shape"
                  ></path>
                  <circle
                    id="Oval"
                    cx="24.4900407"
                    cy="21.7611789"
                    r="4.55142276"
                  ></circle>
                </g>
              </g>
            </g>
          </svg>

          <svg
            className="rounded-[11px] border-2 border-[#0D6077]"
            fill="#00b4b6"
            width="50px"
            height="50px"
            viewBox="-2.4 -2.4 28.80 28.80"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#00b4b6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="0"
                fill="#242424"
                strokeWidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
              ></path>
            </g>
          </svg>
        </div>

        {/* Links Container */}
        <div className="links-container flex justify-center gap-10 pt-5 pb-5">
          <a
            target="_blank"
            href="https://github.com/JayLeverton"
            className="flex items-center"
          >
            <h4 className="text-lg font-semibold">Code</h4>
            <div className="ml-1">
              <GithubSVG size="25px"></GithubSVG>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/JayLeverton"
            className="flex items-center"
          >
            <h4 className="text-lg font-semibold">Live Demo</h4>
            <div className="ml-1">
              <PopoutSVG size="25px"></PopoutSVG>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
