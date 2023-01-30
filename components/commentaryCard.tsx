export default function ComentaryCard(){
    const Comments = [
        {title: '1. Não consigo realizar login', paragraph: '° Experimente utilizar o usuário informado no cadastro como seu usuário de acesso e a senha que você criou como senha. O app recon aceita tanto seu usuário quando e-mail como validação de usuário na tela de login'},
        {title: '2. Como recuperar senha?', paragraph: '° Abaixo do campo de digitação na tela de login existe um botão com o nome “esqueci minha senha”, ao clicar você é redirecionado para uma tela e nela basta fornecer seu e-mail e dentro de alguns minutos você receberá um e-mail de redefinição de senha'},
        {title: '3. Os cards de devocional diário e boletin não carregam', paragraph: '° Experimente deslizar seu dedo de cima para baixo na tela home para que ela recarregue, ou saia da sua conta e entrar novamente. Caso ainda assim você não consiga clique no menu da tela home localizado no canto inferior esquerdo e caracterizado por um ícone de +, após clicar escolha a opção sobre a recon. Você será redirecionado para uma tela com algumas informações sobre a Catedral da reconciliação, clique no botão prosseguir no canto inferior esquerdo da tela e veja se as informações da home serão carregadas. '}
    ]
    return(
        <div className="flex flex-col gap-6 px-8 lg:w-1/3">
            <h2 className='font-semibold'>Dúvidas Frequentes:</h2>
            {
                Comments.map((index) => 
                    <div key={index.title} className="flex flex-col gap-2">
                        <h3 className='font-semibold text-sm'>{index.title}</h3>
                        <p className='text-sm'>{index.paragraph}</p>
                    </div>
                )
            }
      </div>
    )
}