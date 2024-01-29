<template>
  <section class="carousel lg:mt-[73px] hidden lg:block">
    <div
      class="container carousel__container lg:flex lg:flex-col lg:justify-center lg:items-start"
    >
      <h5
        class="carousel__top-title lg:text-[24px] lg:font-semibold lg:leading-normal text-black"
      >
        Comments
      </h5>
    </div>
    <div
      class="carousel-bottom-box container lg:mt-[20px] flex flex-col justify-center items-end"
    >
      <div
        class="carousel__row container flex flex-col justify-between items-center"
      >
        <div class="carousel owl-carousel cursor-grab">
          <div class="flex flex-col justify-center items-center h-[290px]">
            <img
              class="carousel__username-photo"
              src="@/assets/images/face-1.jpg"
              alt="username__photo"
            />
            <div
              class="carousel__mini-boxes bg-[#FEF6DE] lg:py-[20px] lg:pl-[15px] lg:rounded-[15px] lg:pr-[15px]"
            >
              <h5 class="carousel__username lg:mb-[5px] text-[18px] font-bold">
                Otaboyev Abdulaziz
              </h5>
              <p
                class="carousel__university-name lg:mb-[10px] font-medium opacity-65"
              >
                Turin
              </p>
              <q class="carousel__user-comment lg:w-max-[350px] font-thin">
                I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters
              </q>
              <div
                class="flex flex-row justify-start items-center lg:mt-[10px]"
              >
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center h-[290px]">
            <img
              class="carousel__username-photo"
              src="@/assets/images/face-2.jpg"
              alt="username__photo"
            />
            <div
              class="carousel__mini-boxes bg-[#FEF6DE] lg:py-[20px] lg:pl-[15px] lg:rounded-[15px] lg:pr-[15px]"
            >
              <h5 class="carousel__username lg:mb-[5px] text-[18px] font-bold">
                Otaboyev Abdulaziz
              </h5>
              <p
                class="carousel__university-name lg:mb-[10px] font-medium opacity-65"
              >
                Turin
              </p>
              <q class="carousel__user-comment lg:w-max-[350px] font-thin">
                I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters
              </q>
              <div
                class="flex flex-row justify-start items-center lg:mt-[10px]"
              >
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center h-[290px]">
            <img
              class="carousel__username-photo"
              src="@/assets/images/face-3.jpg"
              alt="username__photo"
            />
            <div
              class="carousel__mini-boxes bg-[#FEF6DE] lg:py-[20px] lg:pl-[15px] lg:rounded-[15px] lg:pr-[15px]"
            >
              <h5 class="carousel__username lg:mb-[5px] text-[18px] font-bold">
                Otaboyev Abdulaziz
              </h5>
              <p
                class="carousel__university-name lg:mb-[10px] font-medium opacity-65"
              >
                Turin
              </p>
              <q class="carousel__user-comment lg:w-max-[350px] font-thin">
                I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters
              </q>
              <div
                class="flex flex-row justify-start items-center lg:mt-[10px]"
              >
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center h-[290px]">
            <img
              class="carousel__username-photo"
              src="@/assets/images/face-4.jpg"
              alt="username__photo"
            />
            <div
              class="carousel__mini-boxes bg-[#FEF6DE] lg:py-[20px] lg:pl-[15px] lg:rounded-[15px] lg:pr-[15px]"
            >
              <h5 class="carousel__username lg:mb-[5px] text-[18px] font-bold">
                Otaboyev Abdulaziz
              </h5>
              <p
                class="carousel__university-name lg:mb-[10px] font-medium opacity-65"
              >
                Turin
              </p>
              <q class="carousel__user-comment lg:w-max-[350px] font-thin">
                I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters
              </q>
              <div
                class="flex flex-row justify-start items-center lg:mt-[10px]"
              >
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F4CA33"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="carousel__slider-buttons flex flex-row justify-center items-center gap-[20px]"
      >
        <button
          class="buttons"
          style="
            background: transparent;
            font-size: 18px;
            width: 40px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-right: 3px;
            border-radius: 50%;
            outline: none;
            border: 1px solid #f4ca33;
          "
          @click="prevSlide"
        >
          <i class="fa-solid fa-play rotate-[180deg] text-yellow fa-xs"></i>
        </button>
        <button
          class="buttons"
          style="
            background: transparent;
            font-size: 18px;
            width: 40px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-left: 3px;

            border-radius: 50%;
            outline: none;
            border: 1px solid #f4ca33;
          "
          @click="nextSlide"
        >
          <i class="fa-solid fa-play text-yellow fa-xs"></i>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const owlCarousel = ref(null);
    onMounted(() => {
      owlCarousel.value = $(".owl-carousel").owlCarousel({
        items: 3,
        loop: false,
        start: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: "URLHash",
      });
    });
    const nextSlide = () => {
      owlCarousel.value.trigger("next.owl.carousel");
    };
    const prevSlide = () => {
      owlCarousel.value.trigger("prev.owl.carousel");
    };
    return {
      nextSlide,
      prevSlide,
    };
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  &__container {
  }

  &__top-title {
  }

  &__mini-boxes {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  &__username-photo {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    width: 71px !important;
    height: 71px !important;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: 20px;
    object-fit: cover;
  }

  &__username {
  }

  &__university-name {
  }

  &__user-comment {
  }

  &__slider-buttons {
  }
  .buttons:active {
    transition: 150ms ease;
    opacity: 0.2;
  }
}
@media (max-width: 1279px) {
  .carousel {
    &__container {
    }

    &__top-title {
    }

    &__mini-boxes {
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    &__username-photo {
      width: 51px !important;
      height: 51px !important;
      border-radius: 50%;
      position: absolute;
      top: 0px;
      right: 15px;
      object-fit: cover;
      transform: translateY(15px);
    }

    &__username {
      color: #283033;
    }

    &__university-name {
      color: #283033;
    }

    &__user-comment {
      color: #283033;
    }

    &__slider-buttons {
    }
    .buttons:active {
      transition: 150ms ease;
      opacity: 0.2;
    }
  }
}
</style>
