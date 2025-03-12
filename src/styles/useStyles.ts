import { COLORS } from '../constants/colors'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: `Verdana`,
    fontSize: 12,

    display: 'flex',
    flexDirection: 'row',

    padding: '16px',
    paddingTop: '4px',
  },
  infoSection: {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: COLORS.LIGHTGRAY,
    padding: '10px 16px 10px 16px',
    // borderRight: '1px solid gray',
  },
  stackExperience: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    marginTop: '32px',
  },
  experienceSection: {
    flex: 2.5,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,

    display: 'flex',
    flexDirection: 'column',
  },
  profileImage: {
    borderRadius: '50%',
    width: '164px',
  },
  stackItemRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stackIconName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stackIcon: {
    width: '32px',
  },
  textContainer: {
    width: '100%',
  },
  distanceInfoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0px 24px',
    borderRight: '1px solid #00000077',

    '&:last-child': {
      borderRight: '0px solid #00000077',
    }
  },
  infoSectionTitle: {
    textTransform: 'none',
    color: COLORS.PRIMARY,
    fontSize: 16,
    marginBottom: 4,
    marginTop: 6,
  },
  infoSectionTitleRight: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    marginBottom: 4,
    marginTop: 4,
    fontWeight: 'bold',

    '&:first-child': {
      marginTop: 12,
    }
  },
  infoSectionSubtitle: {
    textTransform: 'none',
    marginBottom: 2,
    marginTop: 5,
    fontSize: 14,
  },
  cvTitle: {
    textTransform: 'none',
    color: COLORS.PRIMARY,
    fontSize: 32,

    marginBottom: 8,
    marginTop: 8,
  },
  cvSubTitle: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 6,
  },
  languagesContainer: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languagesTitle: {
    flex: 1,
  },
  languagesList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginBottom: '-12px',
    marginTop: '-4px'
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2px 0px 2px 0px',
  },
  wppIcon: {
    flex: 1,
  },
  linkedinIcon: {
    flex: 1,
  },
  phoneInfo: {
    flex: 4,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px 0px 8px 0px',
  }
}))
