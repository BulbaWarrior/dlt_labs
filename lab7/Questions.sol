// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

/**
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Questions {

    struct Question {
        uint price;
        address asker;
        string text;
        string answer1;
        string answer2;
        string answer3;
        string answer4;
        uint correct_answer;
    }

    Question[] public questions;


    function post_question(string memory _text, string memory _answer1, string memory _answer2, string memory _answer3, string memory _answer4, uint _correct_answer) payable public {
        questions.push(
            Question(
                {
                    asker: msg.sender,
                    price: msg.value,
                    text: _text,
                    answer1: _answer1,
                    answer2: _answer2,
                    answer3: _answer3,
                    answer4: _answer4,
                    correct_answer: _correct_answer
                }
            )
        );
    }
    function payout(uint money, address reciever) private {
        payable(reciever).transfer(money);
    }

    function answer_question(uint qid, uint8 aid) public {
        Question memory question = questions[qid];
        if (aid == question.correct_answer) {
            payout(question.price, msg.sender);
            delete questions[qid];
        }
    }

}
