 Database: Student Management System
 =================================



=Table structure for table 'student'

CREATE TABLE IF NOT EXISTS `student` 
  ID                                    NOT NULL NUMBER(19),
 ADDRESS                     VARCHAR2(255 CHAR),
 ADMISSION_NO         NOT NULL NUMBER(19),
 AGE                                NOT NULL NUMBER(10),
 CONTACT_NO              VARCHAR2(255 CHAR),
 FATHER                        VARCHAR2(255 CHAR),
 FIRST_NAME              VARCHAR2(255 CHAR),
 LAST_NAME                VARCHAR2(255 CHAR),
 MOTHER                       VARCHAR2(255 CHAR),

PRIMARY_KEY( 'ID')
UNIQUE_KEY('ADMISSION_NO')

Dumping data for table `student`

INSERT INTO `student` VALUES('1', 'London', 'A1', '5','075-12458969', 'Robin','Alex','Carry','Julie');
INSERT INTO `student` VALUES('2', 'Captown', 'A2', '5','075-1244549', 'Herry','Rahul','Kumar','Sita');
INSERT INTO `student` VALUES('3', 'Sydney', 'A3', '5','075-1245436369', 'John','','Root','Rani');
INSERT INTO `student` VALUES('4', 'Mumbai', 'A4', '5','075-1243539', 'Vikram','gupta',','Anjali');
INSERT INTO `student` VALUES('5', 'New York', 'A5', '5','075-1245845269', 'Sun','ora',,'Mitali');

==========================================================================================
=Table structure for table 'fee'

CREATE TABLE IF NOT EXISTS `fee` 
  ID                                               NOT NULL NUMBER(19),
 ADMISSION_NO                     NOT NULL NUMBER(10),
 AMOUNT                                  VARCHAR2(255 CHAR),
 FEE_DATE                                VARCHAR2(255 CHAR),
 PAIDMONTH                           VARCHAR2(255 CHAR),

PRIMARY_KEY( 'ID')
UNIQUE_KEY('ADMISSION_NO')

Dumping data for table `fee`

INSERT INTO `fee` VALUES('1','A1','4000','10/02/2021','March');
INSERT INTO `fee` VALUES('2','A2','3000','10/04/2021','May');
INSERT INTO `fee` VALUES('3','A3','2918','10/05/2021','August');
INSERT INTO `fee` VALUES('4','A4','4320','10/07/2021','September');
INSERT INTO `fee` VALUES('5','A5','3200','10/11/2021','December');

========================================================================================
=Table structure for table 'mark'

CREATE TABLE IF NOT EXISTS `mark`
  ID                                         NOT NULL NUMBER(19),
 ADMISSION_NO               NOT NULL NUMBER(10),
 CHEMISTRY                        NOT NULL NUMBER(10),
 MATHS                                 NOT NULL NUMBER(10),
 PHYSICS                                NOT NULL NUMBER(10),

PRIMARY_KEY( 'ID')
UNIQUE_KEY('ADMISSION_NO')

Dumping data for table `mark`
INSERT INTO `mark` VALUES('1','A1','60','74','80');
INSERT INTO `mark` VALUES('2','A2','43','32','45');
INSERT INTO `mark` VALUES('3','A3','56','86','32');
INSERT INTO `mark` VALUES('4','A4','78','76','86');
INSERT INTO `mark` VALUES('5','A5','91','21','93');

==========================================================================================
=Table structure for table 'user1'

CREATE TABLE IF NOT EXISTS `user1`
 ID                                        NOT NULL NUMBER(10),
 EMAIL_ID                           VARCHAR2(255 CHAR),
 PASSWORD                       VARCHAR2(255 CHAR),
 USER_NAME                      VARCHAR2(255 CHAR),

PRIMARY_KEY( 'ID')

Dumping data for table 'user1'
INSERT INTO `user1` VALUES('1',a123@gmail.com','xxxxx','123a');
INSERT INTO `user1` VALUES('2',b123@gmail.com','yyyy','123b');
INSERT INTO `user1` VALUES('3',c123@gmail.com','xascx','123c')
INSERT INTO `user1` VALUES('4',d123@gmail.com','xadccx','123d');
INSERT INTO `user1` VALUES('5',e123@gmail.com','23eex','123e');

=============================================================================================
=Table structure for table 'Attendance'

CREATE TABLE IF NOT EXISTS `Attendance`
  ID                                            NOT NULL NUMBER(19),
 ADMISSION_NO                   NOT NULL NUMBER(19),
 ATTENDANCE                      VARCHAR2(255 CHAR),
 ATTENDANCE_DATE          VARCHAR2(255 CHAR),

PRIMARY_KEY( 'ID')
UNIQUE_KEY('ADMISSION_NO')

Dumping data for table 'Attendance'
INSERT INTO `Attendance` VALUES('1',A1',Present',10/02/2022');
INSERT INTO `Attendance` VALUES('2',A2',Absent',11/02/2022');
INSERT INTO `Attendance` VALUES('3',A3',Present',12/02/2022');
INSERT INTO `Attendance` VALUES('4',A4',Absent',15/02/2022');
INSERT INTO `Attendance` VALUES('5',A5',Present',13/02/2022');

===========================================================================================











