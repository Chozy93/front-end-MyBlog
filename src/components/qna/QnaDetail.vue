<template>
  <div v-if="currentQna">
    <div class="mb-3">
      <label for="question" class="form-label">Question</label>
      <input
        type="text"
        class="form-control"
        id="question"
        required
        name="question"
        v-model="currentQna.question"
      />
    </div>
    <div class="mb-3">
      <label for="questioner" class="form-label">Questioner</label>
      <input
        type="questioner"
        class="form-control"
        id="questioner"
        required
        name="questioner"
        v-model="currentQna.questioner"
      />
    </div>
    <div class="mb-3">
      <label for="answer" class="form-label">Answer</label>
      <input
        type="text"
        class="form-control"
        id="answer"
        required
        name="answer"
        v-model="currentQna.answer"
      />
    </div>
    <div class="mb-3">
      <label for="answerer" class="form-label">Answerer</label>
      <input
        type="text"
        class="form-control"
        id="answerer"
        required
        name="answerer"
        v-model="currentQna.answerer"
      />
    </div>
    <div class="mb-3">
      <button @click="updateQna" class="btn btn-primary me-3">Update</button>
      <button @click="deleteQna" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import QnaDataService from "../../services/QnaDataService";

/* eslint-disable */
export default {
  data() {
    return {
      currentQna: null,
      message: "",
    };
  },
  methods: {
    getQna(qno) {
      QnaDataService.get(qno) // spring 요청
        //  성공/실패 모르겠지만
        //  성공하면 then안에 있는것이 실행
        .then((response) => {
          this.currentQna = response.data;
          console.log(response.data);
        })
        //  실패하면 catch안에 있는것이 실행
        .catch((e) => {
          console.log(e);
        });
    },

    updateQna() {
      QnaDataService.update(this.currentQna.qno, this.currentQna)
        .then((response) => {
          console.log(response.data);
          this.message = "The Qna was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteQna() {
      QnaDataService.delete(this.currentQna.qno)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/qna");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getQna(this.$route.params.qno);
  },
};
</script>
