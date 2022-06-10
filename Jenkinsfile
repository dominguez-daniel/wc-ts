pipeline {
  agent any
  tools {
    nodejs "NodeJS"
  }
  stages {
    stage('Build') {
      steps {
        echo 'Running build automation'
        sh 'npm install'
        sh 'npm run build'
        archiveArtifacts artifacts: 'build/'
      }
    }
    stage('Deploy') {
      when {
        branch 'master'
      }
      steps {
        withCredentials([sshUserPrivateKey(credentialsId: 'production-id', usernameVariable: 'USERNAME', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS')]) {
          sshPublisher(
            failOnError: true,
            continueOnError: false,
            publishers: [
              sshPublisherDesc(
                configName: 'production',
                verbose: true,
                sshCredentials: [
                  username: '$USERNAME',
                  encryptedPassphrase: '$USERPASS',
                  key: '$KEY'
                ],
                transfers: [
                  sshTransfer(
                    sourceFiles: 'build',
                    remoteDirectory: '/tmp',
                    execCommand: 'rm -rf ~/target/* && cp -r ~/tmp/. ~/target/ && rm -rf ~/tmp/*'
                  )
                ]
              )
            ]
          )
        }
      }
    }
  }
}
