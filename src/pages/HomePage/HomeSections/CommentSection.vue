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
          <div
            class="flex flex-col justify-center items-start h-[290px]"
            v-for="item in galleryArray"
            :key="item"
          >
            <img
              class="carousel__username-photo"
              :src="item.image"
              alt="username__photo"
            />
            <div
              class="carousel__mini-boxes bg-[#FEF6DE] lg:py-[20px] lg:px-[15px] lg:rounded-[15px]"
            >
              <h5 class="carousel__username lg:mb-[5px] text-[18px] font-bold">
                {{ item.name }}
              </h5>
              <p
                class="carousel__university-name lg:mb-[10px] font-medium opacity-65"
              >
                {{ item.university }}
              </p>
              <q class="carousel__user-comment lg:w-max-[350px] font-thin">
                {{ item.comment }}
              </q>
              <img
                class="mt-2 h-[18px] object-contain object-left"
                :src="item.svg"
                alt="svg__stars"
              />
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
import Abdulaziz from "@/assets/images/face-1.jpg";
import Behzod from "@/assets/images/face-2.jpg";
import Doston from "@/assets/images/face-3.jpg";
import Umidjon from "@/assets/images/face-4.jpg";
import fivestars from "@/assets/images/five__stars.png";
import fourstars from "@/assets/images/four__stars.png";
import threestars from "@/assets/images/three__stars.png";
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
      galleryArray: [
        {
          name: `Otaboyev Abdulaziz`,
          university: `Turin`,
          comment: `I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Abdulaziz,
          svg: threestars,
        },
        {
          name: `Mo'minjonov Behzod`,
          university: `Turin`,
          comment: `I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Behzod,
          svg: fourstars,
        },
        {
          name: `Sayyidov Doston`,
          university: `Turin`,
          comment: `I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Doston,
          svg: fivestars,
        },
        {
          name: `Turabov Umidjon`,
          university: `Turin`,
          comment: `I studied in the same course with Muhammadjon Tahirjanov and his
                projects caused many good comments by his Teacher. In this
                regard, I wish you success in your work and 5 stars from me
                Supporters`,
          image: Umidjon,
          svg: fourstars,
        },
      ],
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
