<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0">간편로그인</h2>
        </div>

        <div class="modal-body p-5 pt-0 pb-0"></div>
        <div class="mx-5">
          <div class="img-container">
            <img
              src="./assets/kakao_login_large_narrow.png"
              @click="loginWithKakao"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Sub Modal -->
  <div
    class="modal fade"
    id="subModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">구독하기</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <div class="row p-1">
              <div class="col-sm-6 text-start">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >학교공지</label
                  >
                </div>
              </div>
              <div class="col-sm-6 text-start">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked=""
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    >펀시스템</label
                  >
                </div>
              </div>
              <div class="col-sm-6 text-start">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked=""
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    >학과공지</label
                  >
                </div>
              </div>
              <div class="col-sm-6 text-start">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >학생회공지</label
                  >
                </div>
              </div>
              <div style="margin-top: 20px">
                <form @submit.prevent="addKeyword" class="hstack gap-3">
                  <input
                    class="form-control me-auto"
                    type="text"
                    v-model="newKeyword"
                    placeholder="키워드 입력"
                  />
                  <button
                    type="submit"
                    class="btn btn-secondary"
                    style="white-space: nowrap"
                  >
                    추가
                  </button>
                </form>
                <div class="text-start">
                  <div
                    v-for="(keyword, index) in keywords"
                    :key="index"
                    class="keyword"
                    style="margin-top: 10px"
                  >
                    <span class="fs-5 text-start">{{ keyword }}</span>
                    <button
                      @click="removeKeyword(index)"
                      class="btn-close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
          <button type="button" class="btn btn-primary">저장하기</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img class="nav-logo" src="./assets/Nav-logo.png" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">리스트</a>
            </li>
            <li class="nav-item">
              <button
                v-if="true"
                type="button"
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#subModal"
                style="margin-left: 10px"
              >
                구독
              </button>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <!-- Button trigger modal -->
          <!-- v-if="!isLoggedIn" -->
          <button
            v-if="true"
            type="button"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="margin-left: 10px"
          >
            로그인
          </button>
          <button v-else type="button" class="btn btn-outline-dark">
            로그아웃
          </button>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          학교
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          펀시스템
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          학과
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="disabled-tab"
          data-bs-toggle="tab"
          data-bs-target="#disabled-tab-pane"
          type="button"
          role="tab"
          aria-controls="disabled-tab-pane"
          aria-selected="false"
        >
          학생회
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <SchoolNotice />
      </div>
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <FunSystem />
      </div>
      <div
        class="tab-pane fade"
        id="contact-tab-pane"
        role="tabpanel"
        aria-labelledby="contact-tab"
        tabindex="0"
      >
        <DepartmentNotice />
      </div>
      <div
        class="tab-pane fade"
        id="disabled-tab-pane"
        role="tabpanel"
        aria-labelledby="disabled-tab"
        tabindex="0"
      >
        <StudentCouncil />
      </div>
    </div>
  </div>
</template>

<script>
import SchoolNotice from "./components/SchoolNotice.vue";
import FunSystem from "./components/FunSystem.vue";
import DepartmentNotice from "./components/DepartmentNotice.vue";
import StudentCouncil from "./components/StudentCouncil.vue";
export default {
  name: "App",
  data() {
    return {
      newKeyword: "",
      keywords: [],
    };
  },
  components: { SchoolNotice, FunSystem, DepartmentNotice, StudentCouncil },
  created() {
    console.log(this.isLoggedIn);
  },
  computed: {
    isLoggedIn() {
      // 세션 스토리지에서 로그인 정보 가져오기
      const userInfo = sessionStorage.getItem("userInfo");
      return userInfo !== null; // 로그인 정보가 있는지 확인
    },
  },
  methods: {
    addKeyword() {
      if (this.newKeyword) {
        this.keywords.push(this.newKeyword);
        this.newKeyword = "";
      }
    },
    removeKeyword(index) {
      this.keywords.splice(index, 1);
    },
    async loginWithKakao() {
      if (!(await this.isKakaoInitialized())) {
        // SDK 로드
        window.Kakao.init("b43ade7c4e3832897f45cbbeaa0d19d7");
      }
      window.Kakao.Auth.authorize({
        redirectUri: "https://moassu.netlify.app/oauth",
      });
    },

    isKakaoInitialized() {
      return new Promise((resolve) => {
        if (window.Kakao.isInitialized()) {
          resolve(true);
        } else {
          window.kakaoAsyncInit = () => {
            window.Kakao.isInitialized() ? resolve(true) : resolve(false);
          };
        }
      });
    },
  },
  mounted() {
    // SDK 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      window.Kakao.init("b43ade7c4e3832897f45cbbeaa0d19d7");
      window.kakaoAsyncInit && window.kakaoAsyncInit();
    };
    document.head.appendChild(script);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");

#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mw-90 {
  max-width: 90%;
}
.bg-f0 {
  background-color: #f0f0f0;
}
.img-container {
  object-fit: contain;
}
.insta-container {
  object-fit: contain;
}
.insta-container > img {
  width: 100%;
  height: 100%;
}

.nav-logo {
  height: 50px;
  object-fit: cover;
}
</style>
