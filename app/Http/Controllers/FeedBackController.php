<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FeedBack;

class FeedBackController extends Controller
{
    public function create_feedback(Request $request)
    {
        $data = $request->all();
        $post = FeedBack::create([
            'feedback_user'=> $request->feedback_user,
            'feedback_type'=> $request->feedback_type,
            'feedback_title'=> $request->feedback_title,
            'feedback_content'=> $request->feedback_content,
            'feedback_status'=> $request->feedback_status
        ]);

        return response()->json($post, 200);
        
    }

    public function feedbacks() {
        $feedbacks = FeedBack::with('feedback_user')->get();
        foreach ($feedbacks as $feedback) {
            $feedback->feedback_user;
        }
        return $feedbacks;
    }

    public function approve_feedback($feedback_id, Request $request) {

        $feedback = FeedBack::with('feedback_user')->find($feedback_id);
        $feedback->feedback_status=$request->feedback_status;
        $feedback->save();

        return $feedback;

    }

    public function feedback_by_student($student_id) {
        $feedback = FeedBack::where(['feedback_user'=>$student_id])->with('feedback_user')->get();
        return $feedback;
    }
}
