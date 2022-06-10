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
    stage('Deploy to Stage') {
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


// steps {
//   withCredentials([sshUserPrivateKey(credentialsId: 'production-id', usernameVariable: 'USERNAME', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS')]) {
//     sshPublisher(
//       failOnError: true,
//       continueOnError: false,
//       publishers: [
//         configName: 'production',
//         sshCredentials: [
//           username: "$USERNAME",
//           key: "$KEY",
//           encryptedPassphrase: "$USERPASS"
//         ],
//         transfers: [
//           sourceFiles: 'build',
//           remoteDirectory: '/tmp',
//           execCommand: 'rm -rf ~/target/* && cp -r ~/tmp/. ~/target/ && rm -rf ~/tmp/*'
//         ]
//       ]
//     )
//   }
// }


// def remote = [:]
// remote.name = "production"
// remote.host = "159.65.36.208"

// node {
//   withCredentials([sshUserPrivateKey(credentialsId: 'production-id', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS', usernameVariable: 'deploy')]) {
//     remote.user = deploy
//     remote.identityFile = KEY
//     stage('Lets see if this works') {
//       writeFile file: 'abc.txt', text: 'Hello World'
//     }
//   }
// }


// pipeline {
//   agent any
//   tools { 
//     nodejs "NodeJS" 
//   }
//   stages {
//     stage('Build') {
//       steps {
//         echo 'Running build automation'
//         sh 'npm install'
//         sh 'npm run build'
//         archiveArtifacts artifacts: 'build/'
//       }
//     }
//   }
// }