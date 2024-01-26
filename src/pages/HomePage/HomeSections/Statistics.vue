<template>
  <section class="statistics mt-[40px] md:mt-[50px]">
    <div
      class="container statistics__container flex flex-col justify-center items-start gap-5 md:gap-[30px] lg:gap-[40px]"
    >
      <h4
        class="statistics__title text-black text-[22px] font-semibold leading-normal"
      >
        Statistics
      </h4>
      <div
        class="statistics__bottom w-full flex flex-row justify-between items-center md:flex md:flex-row md:justify-between md:items-center"
      >
        <div
          class="statistics__bottom-boxes flex flex-col justify-center items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal lg:text-[46px] lg:font-bold"
          >
            <span class="num">98</span>%
          </h2>
          <p
            class="statistics__texts text-center text-[12px] font-normal leading-normal lg:text-[16px] lg:text-center lg:w-[113px]"
          >
            Admission rate
          </p>
        </div>
        <div
          class="statistics__bottom-boxes flex flex-col justify-center items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal lg:text-[46px] lg:font-bold"
          >
            <span class="num">217</span>
          </h2>
          <p
            class="statistics__texts text-[12px] font-normal leading-normal w-[62px] text-center lg:text-[16px] lg:text-center lg:w-[153px]"
          >
            Successful students
          </p>
        </div>
        <div
          class="statistics__bottom-boxes flex flex-col justify-center items-center"
        >
          <h2
            class="statistics__numbers text-center text-yellow text-[24px] font-bold leading-normal lg:text-[46px] lg:font-bold"
          >
            $<span class="num">23</span>M
          </h2>
          <p
            class="statistics__texts text-[11px] font-normal leading-normal w-[73px] text-center lg:text-[16px] lg:text-center lg:w-[133px]"
          >
            Scholarship won
          </p>
        </div>
        <div
          class="statistics__bottom-boxes hidden md:flex md:flex-col md:justify-center md:items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal lg:text-[46px] lg:font-bold"
          >
            <span class="num">86</span>%
          </h2>
          <p
            class="statistics__texts text-[12px] font-normal leading-normal w-[62px] text-center lg:text-[16px] lg:text-center lg:w-[125px]"
          >
            Getting visa rate
          </p>
        </div>
        <div
          class="statistics__bottom-boxes hidden md:flex md:flex-col md:justify-center md:items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal lg:text-[46px] lg:font-bold"
          >
            <span class="num">217</span>
          </h2>
          <p
            class="statistics__texts text-[12px] font-normal leading-normal w-[62px] text-center lg:text-[16px] lg:text-center lg:w-[153px]"
          >
            Successful students
          </p>
        </div>
      </div>
      <div
        class="statistics__bottom-second-box w-full flex flex-row justify-evenly items-center md:hidden"
      >
        <div
          class="statistics__bottom-boxes flex flex-col justify-center items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal"
          >
            <span class="num">86</span>%
          </h2>
          <p
            class="statistics__texts text-[12px] font-normal leading-normal w-[62px] text-center"
          >
            Getting visa rate
          </p>
        </div>
        <div
          class="statistics__bottom-boxes flex flex-col justify-center items-center"
        >
          <h2
            class="statistics__numbers text-yellow text-[24px] font-bold leading-normal"
          >
            <span class="num">217</span>
          </h2>
          <p
            class="statistics__texts text-[12px] font-normal leading-normal w-[62px] text-center"
          >
            Successful students
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
$(document).ready(function () {
  $(".num").counterUp({
    delay: 10,
    time: 500,
  });
});
</script>
<style lang="scss" scoped>
.statistics {
  &__container {
  }

  &__title {
    font-family: "Inter";
  }

  &__main-box {
  }

  &__bottom {
  }

  &__bottom-boxes {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      rgba(244, 202, 51, 0.35) 0%,
      rgba(244, 202, 51, 0) 100%
    );
  }

  &__numbers {
    font-family: "Inter";
  }

  &__texts {
    font-family: "Inter";
  }

  &__bottom-second-box {
  }
}
@media (max-width: 1279px) {
  .statistics {
    &__container {
    }

    &__title {
      font-family: "Inter";
    }

    &__main-box {
    }

    &__bottom {
    }

    &__bottom-boxes {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(244, 202, 51, 0.35) 0%,
        rgba(244, 202, 51, 0) 100%
      );
    }

    &__numbers {
      font-family: "Inter";
      font-size: 24px;
    }

    &__texts {
      font-family: "Inter";
      font-size: 14px;
      width: 72px;
    }

    &__bottom-second-box {
    }
  }
}
@media (max-width: 1023px) {
  .statistics {
    &__container {
    }

    &__title {
      font-family: "Inter";
    }

    &__main-box {
    }

    &__bottom {
    }

    &__bottom-boxes {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(244, 202, 51, 0.35) 0%,
        rgba(244, 202, 51, 0) 100%
      );
    }

    &__numbers {
      font-family: "Inter";
    }

    &__texts {
      font-family: "Inter";
    }

    &__bottom-second-box {
    }
  }
}
@media (max-width: 767px) {
  .statistics {
    &__container {
    }

    &__title {
      font-family: "Inter";
    }

    &__main-box {
    }

    &__bottom {
    }

    &__bottom-boxes {
      position: relative;
      max-width: 100%;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(244, 202, 51, 0.35) 0%,
        rgba(244, 202, 51, 0) 100%
      );
    }

    &__numbers {
      font-family: "Inter";
    }

    &__texts {
      font-family: "Inter";
    }

    &__bottom-second-box {
    }
  }
}
@media (max-width: 390px) {
  .statistics {
    &__container {
    }

    &__title {
      font-family: "Inter";
    }

    &__main-box {
    }

    &__bottom {
    }

    &__bottom-boxes {
      position: relative;
      max-width: 100%;
      width: 95px;
      height: 95px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(244, 202, 51, 0.35) 0%,
        rgba(244, 202, 51, 0) 100%
      );
    }

    &__numbers {
      font-size: 20px;
      font-family: "Inter";
    }

    &__texts {
      font-size: 12px;
      font-family: "Inter";
    }

    &__bottom-second-box {
    }
  }
}
</style>
