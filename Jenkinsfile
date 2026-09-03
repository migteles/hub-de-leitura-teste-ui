pipeline {
    agent any
    tools { nodejs "nodejs"}

    stages {
        stage('Clonar o hub de leitura') {
            steps {
                bat '''
                    rmdir /s /q hub-de-leitura-integrado
                    git clone --depth 1 https://github.com/migteles/hub-de-leitura-integrado.git
                    '''
            }
        }

        stage('Instalar as dependencias do projeto') {
            steps {
                dir('hub-de-leitura-integrado') {
                    bat '''
                       call npm install
                       start /B npm start
                       '''
                }
            }
        }

        stage('Clonar o projeto de testes') {
            steps {
                bat '''
                    rmdir /s /q hub-de-leitura-teste-ui
                    git clone --depth 1 https://github.com/migteles/hub-de-leitura-teste-ui.git
                    '''
            }
        }

        stage('Instalar as dependencias dos testes') {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm install'
                }
            }
        }

        stage('Rodar os testes automatizados') {
            steps {
                dir('hub-de-leitura-teste-ui') {
                    bat 'call npm rum test-path1'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.*,cypress/videos/**/*.*', allowEmptyArchive: true
            bat 'taskkill /F /IM node.exe || exit 0'
        }
    }    

}