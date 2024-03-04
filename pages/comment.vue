<template>
  <Button @click="generateUsers">add user</Button>
  <div class="comment-layout">
    <div class="comment-box-layout" v-for="(user, index) in users" :key="index">
      <div class="row comment-box">
        <div class="col col-vote" v-if="windowWidth >= 768">
          <div class="upvote-field d-flex align-items-center">
            <img src="/images/plus_icon.svg" />
            <div class="number">{{ user?.numberUpvote }}</div>
            <img src="/images/minus_icon.svg" />
          </div>
        </div>
        <div class="col d-flex flex-col gap-3">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-4">
              <img class="avatar-img" :src="user.avatar" />
              <div class="name-text">{{ user?.firstName + ' ' + user?.lastName }}</div>
              <div class="time-text">
                {{ checkDateComment(user?.commentDate) }}
              </div>
            </div>
            <div class="d-flex align-items-center gap-2 reply-section" v-if="windowWidth >= 768" @click="toggleReply">
              <img src="/images/reply_icon.svg" />
              <div class="reply-text">Reply</div>
            </div>
          </div>
          <div class="comment-text">
            {{ user?.comment }}
            <div class="d-flex justify-content-between" v-if="windowWidth <= 768">
              <div class="upvote-field d-flex">
                <img src="/images/plus_icon.svg" />
                <div class="number">{{ user?.numberUpvote }}</div>
                <img src="/images/minus_icon.svg" />
              </div>
              <div class="d-flex align-items-center gap-2 reply-section" @click="toggleReply">
                <img src="/images/reply_icon.svg" />
                <div class="reply-text">Reply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user-reply-layout">
        <div class="row">
          <div class="col col-line">
            <div class="line-reply"></div>
          </div>
          <div class="col col-reply">
            <div class="row comment-box" v-for="(reply, i) in user.replyList" :key="i">
              <div class="col col-vote" v-if="windowWidth >= 768">
                <div class="upvote-field d-flex align-items-center">
                  <img src="/images/plus_icon.svg" />
                  <div class="number">{{ reply?.numberUpvote }}</div>
                  <img src="/images/minus_icon.svg" />
                </div>
              </div>
              <div class="col d-flex flex-col gap-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-4">
                    <img class="avatar-img" :src="reply.avatar" />
                    <div class="name-text">{{ reply?.firstName + ' ' + reply?.lastName }}</div>
                    <div class="time-text">
                      {{ checkDateComment(reply?.commentDate) }}
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-2 reply-section" v-if="windowWidth >= 768"
                    @click="toggleReply">
                    <img src="/images/reply_icon.svg" />
                    <div class="reply-text">Reply</div>
                  </div>
                </div>
                <div class="comment-text">
                  {{ reply?.comment }}
                  <div class="d-flex justify-content-between" v-if="windowWidth <= 768">
                    <div class="upvote-field d-flex">
                      <img src="/images/plus_icon.svg" />
                      <div class="number">{{ reply?.numberUpvote }}</div>
                      <img src="/images/minus_icon.svg" />
                    </div>
                    <div class="d-flex align-items-center gap-2 reply-section" @click="toggleReply">
                      <img src="/images/reply_icon.svg" />
                      <div class="reply-text">Reply</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex gap-4 comment-box reply-field" v-if="windowWidth >= 768">
      <img class="avatar-img" :src="user?.avatar" />
      <textarea class="reply-layout" v-model="userComment" placeholder="Add a comment…"></textarea>
      <button class="action-btn" @click="sendComment">
        Send
      </button>
    </div>
    <div class="d-flex flex-col gap-4 comment-box reply-field" v-else>
      <textarea class="reply-layout" v-model="userComment" placeholder="Add a comment…"></textarea>
      <div class="d-flex justify-content-between align-items-center">
        <img class="avatar-img" :src="user?.avatar" />
        <button class="action-btn" @click="sendComment">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import type {
  User,
} from "../plugins/inteface/type";
import moment from 'moment'

const user = ref<User>()
const users = ref([]);
const userComment = ref()
const windowWidth = ref()

onMounted(() => {
  getWidth()
  getUser()
  createRandomUser()
})

const getWidth = () => {
  windowWidth.value = window.innerWidth
  window.onresize = () => {
    windowWidth.value = window.innerWidth
  }
}

const checkDateComment = (date: string) => {
  return moment(date).fromNow()
}

const getUser = () => {
  user.value = generateFunction()
}

const generateFunction = () => {
  const randoomCount = faker.number.int({ min: 0, max: 5 })
  const list = []
  for (let i = 0; i < randoomCount; i++) {
    const replyDetail = {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
      comment: faker.lorem.text(),
      numberUpvote: faker.number.int({ max: 100 }),
      commentDate: faker.date.recent()
    }
    list.push(replyDetail)
  }
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    comment: faker.lorem.text(),
    numberUpvote: faker.number.int({ max: 100 }),
    commentDate: faker.date.recent(),
    replyList: list
  };
}

function createRandomUser() {
  let geneUser = []
  faker.seed(123);
  for (let i = 0; i < 10; i++) {
    const uu = generateFunction();
    geneUser.push(uu);
  }
  users.value = geneUser
  console.log(users.value);
}

const generateUsers = () => {
  let generate = generateFunction()
  users.value?.push(generate)
  console.log(users.value);
}

const sendComment = () => {
  // const currentUser = user.value
  // currentUser.commentDate = moment()
  // currentUser.comment = userComment.value
  // currentUser.numberUpvote = 0
  // currentUser.replyList = []
  // users.value?.push(currentUser)
  // userComment.value = ''
}

const toggleReply = () => {

}
</script>

<style lang="scss" scoped>
.comment-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  flex-direction: column;
  gap: 20px;

  .comment-box-layout {
    width: 50%;
    max-width: 618px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }

  .comment-box {
    background-color: #FFFFFF;
    padding: 24px;
    border-radius: 10px;
    @media only screen and (max-width: 768px) {
      padding: 16px 16px 13px;
    }

    &.reply-field {
      width: 618px;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }
    }
  }

  .row {
    --bs-gutter-x: 0px;
    gap: 24px;

    .col-vote {
      flex: 0 0 40px;
    }
  }

  .upvote-field {
    gap: 19px;
    background-color: #F5F6FA;
    border-radius: 10px;
    padding: 12px 15px;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: row;
      height: auto;
    }

    img {
      cursor: pointer;
    }

    .number {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #5357B6;
    }
  }

  .reply-text {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #5357B6;
  }

  .reply-section {
    cursor: pointer;
  }

  .name-text {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #334253;
  }

  .time-text {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727E;
  }

  .avatar-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .comment-text {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #67727E;
    word-break: break-all;
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  .reply-layout {
    padding: 12px 24px;
    max-height: 96px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #334253;
    border: 1px solid #5357B6;
    border-radius: 10px;
    width: 100%;
  }

  .action-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 12px 30px;
    background-color: #5357B6;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    height: 48px;
    color: #FFFFFF;

    &:disabled {
      background-color: #C5C6EF;
    }
  }

  .user-reply-layout {
    padding-left: 0px;
    gap: 24px;
    display: flex;
    flex-direction: column;

    .row {

      @media only screen and (max-width: 768px) {
        gap: 16px;
      }
    }

    .col-line {
      display: inline-flex;
      flex: 0 0 2px;
      padding-left: 43px;

      @media only screen and (max-width: 768px) {
        padding-left: 0px;
      }

      .line-reply {
        background-color: #E9EBF0;
        width: 2px;
        height: 100%;
      }
    }

    .col-reply {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}</style>