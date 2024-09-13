<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            // Obtener la información del usuario desde Google
            $googleUser = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            // Si hay un error, redirigir al login con un mensaje de error
            return redirect()->route('select-format-user')->with('error', 'Error al intentar autenticarse con Google.');
        }

        // Buscar o crear el usuario en la base de datos
        $user = User::firstOrCreate(
            ['email' => $googleUser->email],
            ['name' => $googleUser->name]
        );

        // Iniciar sesión al usuario
        Auth::login($user);

        // Redirigir a la vista 'select-format-user'
        return redirect()->route('select-format-user');
    }
}


// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use Laravel\Socialite\Facades\Socialite;
// use Illuminate\Support\Facades\Auth;
// use App\Models\User;

// class LoginController extends Controller
// {
//     public function showLoginForm()
//     {
//         return view('auth.login');
//     }

//     public function redirectToGoogle()
//     {
//         return Socialite::driver('google')->redirect();
//     }

//     public function handleGoogleCallback()
//     {
//         try {
//             $user = Socialite::driver('google')->user();
//         } catch (\Exception $e) {
//             // return redirect()->route('login')->with('error', 'Error al intentar autenticarse con Google. Inténtalo de nuevo.');
//             return response() -> json($e->getMessage());
//         }

//         $existingUser = User::where('email', $user->email)->first();
//         if ($existingUser) {
//             Auth::login($existingUser);
//         } else {
//             $newUser = new User();
//             $newUser->name = $user->name;
//             $newUser->email = $user->email;
//             $newUser->save();
//             Auth::login($newUser);
//         }

//         return redirect()->route('select-format');
//     }
// }
